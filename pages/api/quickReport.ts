export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    if (req.method === "OPTIONS") {
        res.setHeader(
            "Access-Control-Allow-Methods",
            "PUT, POST, PATCH, DELETE, GET"
        );
        return res.status(200).json({});
    }

    const data = req.body;
    const response = await fetch(
        `https://api.github.com/repos/lindylearn/unclutter/issues`,
        {
            method: "POST",
            body: JSON.stringify({
                title: `Quick report`,
                body: `${data.message}

Unclutter version: \`${data.unclutterVersion}\`
Browser type: \`${data.browserType}\``,
                labels: [],
            }),
            headers: {
                Authorization: `token ${process.env.GITHUB_BOT_TOKEN}`,
                Accept: "application/vnd.github+json",
                "Content-Type": "application/json",
            },
        }
    );
    const json = await response.json();

    res.status(200).send(json.url);
}
