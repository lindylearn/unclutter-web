import Index, { getStaticProps as getStaticPropsOriginal } from "./index";

export default function V1Index(props) {
    return <Index {...props} />;
}
export const getStaticProps = getStaticPropsOriginal;
