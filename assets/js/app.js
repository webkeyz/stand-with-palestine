// TODO: A separate API is needed to fetch updated numbers
// Data - Last Updated: 28 Oct. 2023
const statsData = [
    {
        icon: 'assets/img/women.svg',
        count: '1863',
        title: 'Women',
        desc: 'killed',
    },
    {
        icon: 'assets/img/pregnant.svg',
        count: '2415',
        title: 'Pregnant',
        desc: 'women killed',
    },
    {
        icon: 'assets/img/baby.svg',
        count: '3195',
        title: 'Babies',
        desc: 'killed',
    },
    {
        icon: 'assets/img/home.svg',
        count: '177,781',
        title: 'Homes',
        desc: 'destroyed',
    },
    {
        icon: 'assets/img/injured.svg',
        count: '19,450',
        title: 'People',
        desc: 'injured',
    },
];

// Initialize Palestine Banner
const Palestine = {
    init: function () {
        const palestineBannerWrapper = document.createElement('section');
        palestineBannerWrapper.id = 'free-palestine-widget';
        document.body.insertBefore(palestineBannerWrapper, document.body.firstChild);

        // Create the main palestineBanner
        const palestineBanner = document.createElement('section');
        palestineBanner.id = 'free-palestine-banner';
        palestineBannerWrapper.appendChild(palestineBanner);

        // 1. Create flag element
        const flag = document.createElement("img");
        flag.src = 'https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Palestine.svg';
        flag.classList.add('logo');
        palestineBanner.appendChild(flag);

        // 2. Create a Hero element
        const heroText = document.createElement('p');
        heroText.className = 'hero';

        // 2.1 Desktop Message
        const desktopSpan = document.createElement('span');
        desktopSpan.className = 'desktop';
        desktopSpan.textContent = "WE’RE AMONGST MILLIONS WHO STAND WITH PALESTINE.";
        heroText.appendChild(desktopSpan);

        // 2.2 Mobile Message
        const mobileSpan = document.createElement('span');
        mobileSpan.className = 'mobile';
        mobileSpan.textContent = "WE STAND WITH PALESTINE.";
        heroText.appendChild(mobileSpan);

        palestineBanner.appendChild(heroText);

        // Create the stats wrapper
        const statsWrapper = document.createElement('div');
        statsWrapper.className = 'stats-wrapper';
        palestineBannerWrapper.appendChild(statsWrapper);

        const stats = document.createElement('div');
        stats.className = 'stats';
        
        // Create the stats items dynamically from the data
        statsData.forEach((stat) => {
            const item = document.createElement('div');
            item.className = 'item';

            const icon = document.createElement('img');
            icon.src = stat.icon;
            icon.className = 'icon';
            icon.alt = 'Stat icon';

            const info = document.createElement('div');
            info.className = 'info';

            const title = document.createElement('p');
            title.className = 'title';
            title.textContent = stat.count + ' ' + stat.title;

            const desc = document.createElement('span');
            desc.className = 'desc';
            desc.textContent = stat.desc;

            info.appendChild(title);
            info.appendChild(desc);
            item.appendChild(icon);
            item.appendChild(info);
            stats.appendChild(item);
        });

        statsWrapper.appendChild(stats);
    }
};