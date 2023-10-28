// Import SCSS
import '../css/style.scss';

// alert('test');

// Stats will be updated from an external API
const statsData = [];

const baseAPIURL = 'https://get-pal-stats-live-api.onrender.com';
const baseImgURL = 'https://elharony.com/public/stats-icons/';

// Initialize Palestine Banner
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

// Get updated statistics form an external API
fetch(baseAPIURL + '/stats') // Replace with your API URL
	.then((response) => response.json())
	.then((data) => {
		// Update the statsData with the latest data
		statsData.length = 0;
		statsData.push(...data);

		// Update the widget to display the new data
		stats.innerHTML = ''; // Clear the previous data
		statsData.forEach((stat) => {
			const item = document.createElement('div');
			item.className = 'item';


			const icon = document.createElement('img');
			icon.src = baseImgURL + stat.icon;
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
	});
