import { type RequestHandler } from "@builder.io/qwik-city";
import { basehub } from  '../../../connect';
import { blogFragment } from '../../queries/insights';



export const onGet: RequestHandler = async (req) => {

  const entry = await basehub({ token: `${req.env.get('BASEHUB_TOKEN')}` }).query({
        __typename: true,
        insights: {
          blog: {
            ...blogFragment,
            blogPosts: {
              ...blogFragment.blogPosts,
              __args: {
                orderBy: 'date__DESC'
              }
            }
          }
        }
    });

  const blogData = entry?.insights?.blog?.blogPosts?.items || []


  let sitemapXml =
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Assuming BASE_URL is a placeholder for your actual base URL
  const BASE_URL = 'https://www.jussmor.com'; // Replace YOUR-BASE_URL with your actual base URL

  // Adding a dynamic URL to the sitemap
  sitemapXml += `
    ${blogData.map((item)=> (
      `<url>
      <loc>${BASE_URL}/insights/blog/${item?._slug}/</loc>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>\n`
    ))}`;

  sitemapXml += "</urlset>";

  const response = new Response(sitemapXml, {
    status: 200,
    headers: {
      "Content-Type": "text/xml",
    },
  });


  // Sending the response back to the client
  req.send(response);
};
