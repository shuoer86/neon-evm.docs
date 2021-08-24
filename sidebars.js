/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure.
  // If you generate a sitebar automatically, you need to run the following command:
//  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */

  tutorialSidebar: [
    {
      type: 'category',
      label: 'About',
      items:
      [
        'intro',
//        'getting_started',
        'glossary',
      ],
    },
    {
      type: 'category',
      label: 'Devportal',
      items:
      [
        'devportal/eth_sol_solution',
        'devportal/neon_evm_arch',
        'devportal/value_token',
        'devportal/metamask_setup',
        'devportal/bpf_trace',
        {
          type: 'category',
          label: 'Testnet',
          items: 
          [
            'devportal/testnet/connect_to_solana_via_proxy',
            'devportal/testnet/deploy_contract_via_remix',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Local Solana cluster',
      items:
      [
        'solana_cluster/cluster_installation',
      ],
    },
    {
      type: 'category',
      label: 'Neonswap',
      items:
      [
        'neonswap/neonswap_overview',
        'neonswap/neonswap',
        'neonswap/neonswap_tests',
      ],
    },
    {
      type: 'category',
      label: 'Software manuals',
      items:
      [
        {
          type: 'category',
          label: 'Core aspects',
          items: 
          [
            'software_manuals/foundational_topics/web3',
            'software_manuals/foundational_topics/account',
            'software_manuals/foundational_topics/transaction',
            'software_manuals/foundational_topics/block',
            'software_manuals/foundational_topics/gas',
            'software_manuals/foundational_topics/proof-of-work',
            'software_manuals/foundational_topics/proof-of-stake',
          ],
        },
        {
          type: 'category',
          label: 'How to guides',
          items: 
          [
            'software_manuals/how_to_guides/deploy_contract',
            'software_manuals/how_to_guides/support_docs',
          ],
        },
      ],
    },
  ],
};