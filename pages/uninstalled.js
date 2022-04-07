import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Unclutter - Immersive Reading Mode</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="m-3 text-3xl font-bold">
        <Link href="/" passHref>
          <a className="flex gap-3 items-center">
            <img className="w-14" src="/icon.svg" />
            Unclutter
          </a>
        </Link>
      </h1>
      <main className="mt-5 mx-auto max-w-xl flex flex-col items-start text-lg">
        <h1 className="text-4xl font-bold">Uninstall Successful</h1>
        <p>The Unclutter browser extension has been successully uninstalled.</p>

        <div className="mt-5 flex flex-col gap-3">
          <div>
            <h2 className="text-2xl font-bold">Quick feedback</h2>
            <p>
              Thank you for trying out the extension! I would seriously
              appreciate some quick feedback.
            </p>
          </div>

          <div>
            <p>What didn&apos;t work for you?</p>
            <ul className="ml-3 flex flex-col gap-0.5">
              <Option id="didnt-work" text="The extension does not work well" />
              <Option id="not-useful" text="It isn't useful to me" />
              <Option id="too-annoying" text="It's too annoying" />
              <Option id="other" text="Other" />
            </ul>
          </div>

          <div>
            <p>Anything else you want to share?</p>
            <textarea className="mt-2 ml-3 px-3 py-1 w-5/6 h-28 rounded bg-[#faf3ce]" />
          </div>

          <p>
            <b>Thank you so much!</b>
            <br />
            Peter Hagen
          </p>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}

function Option({ text, id, name = "reason" }) {
  return (
    <li>
      <input type="radio" className="mr-2" name={name} id={id} />
      <label htmlFor={id}>{text}</label>
    </li>
  );
}
