
// BUILDING STYLES COMMON
export const BUILDING_STYLES_CONST = {
    PB_HEADER_LABEL: 'Post & Beam',
    SLW_HEADER_LABEL: 'Stacked Logs',
    TF_HEADER_LABEL: 'Timber Frame'
};

export const BUILDING_STYLES_DEFAULT_PATH = {
    POST_AND_BEAM_DEFAULT: '/building-styles/post-and-beam/homes',
    STACKED_LOG_WALLS_DEFAULT: '/building-styles/stacked-log-walls/homes',
    TIMBER_FRAME_DEFAULT: '/building-styles/timber-frame/homes'
}

export const BUILDING_STYLES_NAVBAR = [
    { title: "Post and Beam", href: "/building-styles/post-and-beam/homes" },
    { title: "Stacked Logs", href: "/building-styles/stacked-log-walls/homes" },
    { title: "Timber Frame", href: "/building-styles/timber-frame/homes" }
];

// BUILDING STYLES - POST AND BEAM
export const PB_URL_PATH = {
    HOMES: "/building-styles/post-and-beam/homes",
    FS: "/building-styles/post-and-beam/four-square",
    LS: "/building-styles/post-and-beam/log-species",
    DAS: "/building-styles/post-and-beam/delivery-and-setup",
    WI: "/building-styles/post-and-beam/whats-included",
    SP: "/building-styles/post-and-beam/sample-plans"
}

export const PB_TITLE = {
    HOMES: "Post & Beam Homes",
    FS: (<div>4Square&#8482;</div>),
    LS: "Log Species",
    DAS: "Delivery & Setup",
    WI: "What's Included?",
    SP: "Sample Plans"
}

export const PB_NAV_LIST = [
    { title: PB_TITLE.HOMES, href: PB_URL_PATH.HOMES },
    { title: PB_TITLE.FS, href: PB_URL_PATH.FS },
    { title: PB_TITLE.LS, href: PB_URL_PATH.LS },
    { title: PB_TITLE.DAS, href: PB_URL_PATH.DAS },
    { title: PB_TITLE.WI, href: PB_URL_PATH.WI },
    { title: PB_TITLE.SP, href: PB_URL_PATH.SP }
];

// BUILDING STYLES - STACKED LOG WALLSs
export const SLW_URL_PATH = {
    HOMES: "/building-styles/stacked-log-walls/homes",
    DRY_AND_SET: "/building-styles/stacked-log-walls/drying-and-settling",
    OS: "/building-styles/stacked-log-walls/overscribing",
    NAT: "/building-styles/stacked-log-walls/notches-and-tails",
    LS: "/building-styles/stacked-log-walls/log-species",
    DAS: "/building-styles/stacked-log-walls/delivery-and-setup",
    WI: "/building-styles/stacked-log-walls/whats-included",
    SP: "/building-styles/stacked-log-walls/sample-plans",
}

export const SLW_TITLE = {
    HOMES: "Stacked Log Homes",
    SL: "Stacked Logs",
    DRY_AND_SET: "Drying & Settling",
    OS: "Overscribing",
    NAT: "Notches & Tails",
    LS: "Log Species",
    DAS: "Delivery & Setup",
    WI: "What's Included?",
    SP: "Sample Plans"
}

export const SLW_NAV_LIST = [
    { title: SLW_TITLE.HOMES, href: SLW_URL_PATH.HOMES }, 
    { title: SLW_TITLE.DRY_AND_SET, href: SLW_URL_PATH.DRY_AND_SET },
    { title: SLW_TITLE.OS, href: SLW_URL_PATH.OS },
    { title: SLW_TITLE.NAT, href: SLW_URL_PATH.NAT },
    { title: SLW_TITLE.LS, href: SLW_URL_PATH.LS },
    { title: SLW_TITLE.DAS, href: SLW_URL_PATH.DAS },
    { title: SLW_TITLE.WI, href: SLW_URL_PATH.WI },
    { title: SLW_TITLE.SP, href: SLW_URL_PATH.SP }
];

// BUILDING STYLES - TIMBER FRAME
export const TF_URL_PATH = {
    HOMES: "/building-styles/timber-frame/homes",
    TRAD: "/building-styles/timber-frame/traditional",
    WI: "/building-styles/timber-frame/whats-included",
    LS: "/building-styles/timber-frame/log-species"
}

export const TF_TITLE = {
    HOMES: "Timber Frame Homes",
    TRAD: "Traditional Timber Frames",
    WI: "What's included",
    LS: "Log Species"
}

export const TF_NAV_LIST = [
    { title: TF_TITLE.HOMES, href: TF_URL_PATH.HOMES },
    { title: TF_TITLE.TRAD, href: TF_URL_PATH.TRAD },
    { title: TF_TITLE.WI, href: TF_URL_PATH.WI },
    { title: TF_TITLE.LS, href: TF_URL_PATH.LS }
];
