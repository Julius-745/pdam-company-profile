import React from 'react';

import { Helmet } from 'react-helmet-async';

export interface ISeo {
    title: string,
    description: string,
    type: string,
    name: string
}

const Seo: React.FC<ISeo> =({ title, description, type, name }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default Seo;