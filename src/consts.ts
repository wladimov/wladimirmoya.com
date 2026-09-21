// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const NAME = 'Wladimir Moya';
export const NICKNAME = '@wladimov';
export const SITE_TITLE = `${NAME} | Desarrollador de software`;
export const SITE_DESCRIPTION = 'Soy Wladimir Moya, programador.';

export const isPublished = ({ data }: { data: { draft?: boolean } }) =>
  import.meta.env.PROD ? data.draft !== true : true;
