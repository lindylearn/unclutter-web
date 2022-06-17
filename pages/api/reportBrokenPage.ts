export default async function handler(req, res) {
    const data = JSON.parse(req.body);

    await fetch(`https://api.github.com/repos/lindylearn/unclutter/issues`, {
        method: "POST",
        body: JSON.stringify({
            title: `Broken website styling: ${data.domain}`,
            body: `A user reported an issue on https://${data.domain} from within the extension.

            URL: ${data.url}
            
            Unclutter version: \`${data.unclutterVersion}\`
            Browser: \`${data.browserType}\`
            User Agent: \`${data.userAgent}\``,
            labels: ["broken-website"],
        }),
        headers: {
            Authorization: `token ${process.env.GITHUB_BOT_TOKEN}`,
        },
    });

    res.status(200).send("ok");
}
