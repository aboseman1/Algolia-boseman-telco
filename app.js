
const searchClient = algoliasearch(
  'HMDOS2RZUS',
  'c98b58afe8c32c6c7b262e46676c284f'
);

const search = instantsearch({
  indexName: 'telco',
  searchClient,
  future: { preserveSharedStateOnUnmount: true },
  insights: true,
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),


  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: (hit, { html, components }) => html`
        <article>
        <img src="${hit.image}" align="left" alt="" />
        <div class="hit-name">
        <h1>${hit.name}</h1>
        </div>
        <div class="hit-description">
        <p>${hit.description}</p>
        </div>
        <div class="hit-price">
        <p>Starting at ${hit.price}</p>
        </div>
      
\        </article>
      `,
    },
  }),
  instantsearch.widgets.configure({
    hitsPerPage: 8,
  }),


  instantsearch.widgets.panel({
    templates: { header: () => 'brand' },
  })(instantsearch.widgets.refinementList)({
    container: '#brand-list',
    attribute: 'brand',
  }),
  instantsearch.widgets.panel({
    templates: { header: () => 'price' },
  })(instantsearch.widgets.refinementList)({
    container: '#price-list',
    attribute: 'price',
  }),

  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.start();
