import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO
      seo={{
        metaTitle: "404: não encontrado",
        metaDescription: "parece que você tá perdide!",
      }}
    />
    <h1>vish, não encontramos sua página não</h1>
    <p>
      parece que você acessou uma página que não existe não, viu? bora voltar pra home?
    </p>
  </Layout>
);

export default NotFoundPage;
