import * as React from "react";
import { Link, navigate } from "gatsby";

export default () => {
    if (typeof window !== `undefined`) {
        navigate("/frontend-developer");
    }
    return <Link to="/frontend-developer/"></Link>;
};

export const Head = () => <title>Resume Abolfazl Mahkam</title>;
