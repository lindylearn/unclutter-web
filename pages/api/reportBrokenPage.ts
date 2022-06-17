export default async function handler(req, res) {
    const data = JSON.parse(req.body);

    await fetch(`https://api.github.com/repos/lindylearn/unclutter/issues`, {
        method: "POST",
        body: JSON.stringify({
            title: `Broken website styling: ${data.domain}`,
            body: `A user reported an issue on ${data.url} from within the extension.

Unclutter version: \`${data.unclutterVersion}\`
Browser type: \`${data.browserType}\`
User Agent: \`${data.userAgent}\``,
            labels: ["broken-website"],
        }),
        headers: {
            Authorization: `token ${process.env.GITHUB_BOT_TOKEN}`,
        },
    });

    res.status(200).send("ok");
}
