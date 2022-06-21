import fs from "fs/promises";
import prettier from "prettier";
import simpleGit from "simple-git";

export default async function handler(req, res) {
    const data = req.body;
    const { domain, selectors } = data;

    console.log("Cloning Unclutter fork to create blocklist PR...");
    try {
        await simpleGit().clone(
            `https://${process.env.GITHUB_BOT_TOKEN}@github.com/lindy-bot/unclutter.git`,
            "./unclutter"
        );
    } catch (err) {
        // take folder if already exists
    }
    const git = simpleGit({ baseDir: `./unclutter` }); // use cloned repo from now on
    const branchName = `${domain}-${Math.random().toString(36).slice(2, 7)}`;
    await git.checkoutBranch(branchName, `main`);

    // read file
    const fileName = `source/data/domainBlocklistSelectors.json`;
    const fileContent = await fs.readFile(`./unclutter/${fileName}`);
    const jsonContent = JSON.parse(fileContent.toString());

    // add new config, write file
    console.log("Modifying json file...");
    const uniqueSelectors = new Set<string>([
        ...(jsonContent[domain] || []),
        ...selectors,
    ]);
    jsonContent[domain] = [...uniqueSelectors];
    const newContent = prettier.format(JSON.stringify(jsonContent), {
        tabWidth: 4,
        parser: "json5",
        trailingComma: "all",
    });
    await fs.writeFile(`./unclutter/${fileName}`, newContent);

    await git.add(fileName);
    await git.commit(
        `Adding ${selectors.length} blocklist selectors for ${domain} [automated]`
    );

    console.log("Pushing new branch...");
    await git.push("origin", branchName);

    console.log("Creating PR...");
    const response = await fetch(
        `https://api.github.com/repos/lindylearn/unclutter/pulls`,
        {
            method: "POST",
            body: JSON.stringify({
                title: `Adding ${selectors.length} blocklist selectors for ${domain} [automated]`,
                body: `A user submitted these element block selectors from within the extension:

Url: ${data.url}
Unclutter version: \`${data.unclutterVersion}\`
Browser type: \`${data.browserType}\`
User Agent: \`${data.userAgent}\``,
                head: `lindy-bot:${branchName}`,
                base: "main",
                maintainer_can_modify: true,
            }),
            headers: {
                Authorization: `token ${process.env.GITHUB_BOT_TOKEN}`,
            },
        }
    );
    res.status(response.status).send();
}
