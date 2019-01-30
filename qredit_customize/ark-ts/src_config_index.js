// tslint:disable:object-literal-sort-keys

export default {
  networks: {
    mainnet: {
      bip32: {
        private: 0x4358394,
        public: 0x43587cf,
      },
      name: 'mainnet',
      nethash: '5e67037fd290ba7ab378e84a591d251c46eb9770eb134983771fd602233bf193',
      token: 'Qredit',
      symbol: 'XQR',
      version: 0x3a,
      explorer: 'http://qredit.cloud',
      wif: 0xbb,
      p2pPort: 4101,
      apiPort: 4103,
      p2pVersion: '2.0.0',
      isV2: true,
      activePeer: {
        ip: '136.144.170.17',
        port: 4103,
      },
      peers: [
        '136.144.170.17:4103',
        '136.144.215.24:4103'
      ],
    },
    devnet: {
      bip32: {
        public: 0x043587cf,
        private: 0x04358394,
      },
      name: 'devnet',
      nethash: '2a44f340d76ffc3df204c5f38cd355b7496c9065a1ade2ef92071436bd72e867',
      token: 'DARK',
      symbol: 'DѦ',
      version: 30,
      explorer: 'https://dexplorer.ark.io',
      wif: 0xaa,
      p2pPort: 4002,
      apiPort: 4003,
      p2pVersion: '2.0.0',
      isV2: true,
      activePeer: {
        ip: '167.114.29.51',
        port: 4003,
      },
      peers: [
        '167.114.29.51:4003',
        '167.114.29.52:4003',
        '167.114.29.53:4003',
        '167.114.29.54:4003',
        '167.114.29.55:4003',
      ],
    },
  },
  blockchain: {
    interval: 8,
    delegates: 51,
    date: new Date(Date.UTC(2017, 2, 21, 13, 0, 0, 0)),
  },
};
