type WebSiteModel = {
	id: number;
	name: string;
	url: string;
	isUse?: number;
};
type WebSiteCategory = {
	categoryName: string;
	webSites: Array<WebSiteModel>;
};

const datas: Array<WebSiteCategory> = [
	{
		categoryName: '搜索',
		webSites: [
			{
				id: 1001,
				name: '百度',
				url: 'https://www.baidu.com/',
				isUse: 1,
			},
			{
				id: 1002,
				name: '必应',
				url: 'https://cn.bing.com/',
			},
		],
	},
	{
		categoryName: '翻译',
		webSites: [
			{
				id: 2001,
				name: '百度翻译',
				url: 'https://fanyi.baidu.com/',
				isUse: 1,
			},
		],
	},
	{
		categoryName: '文档',
		webSites: [
			{
				id: 3001,
				name: 'Vue.js',
				url: 'https://cn.vuejs.org/',
			},
			{
				id: 3002,
				name: 'Vue Router',
				url: 'https://router.vuejs.org/',
			},
			{
				id: 3003,
				name: 'Vuex',
				url: 'https://vuex.vuejs.org/',
			},
			{
				id: 3004,
				name: 'Vite',
				url: 'https://cn.vitejs.dev/',
			},
			{
				id: 3005,
				name: 'Element Plus',
				url: 'https://element-plus.org/zh-CN/',
			},
			{
				id: 3006,
				name: 'ASP.NET',
				url: 'https://learn.microsoft.com/zh-cn/aspnet/core/?view=aspnetcore-6.0',
			},
			{
				id: 3007,
				name: 'Entity Framework',
				url: 'https://learn.microsoft.com/zh-cn/ef/',
			},
			{
				id: 3008,
				name: 'EfCore Npgsql',
				url: 'https://www.npgsql.org/efcore/mapping/translations.html',
			},
			{
				id: 3009,
				name: 'NuGet',
				url: 'https://www.nuget.org/',
			},
			{
				id: 3010,
				name: 'Mvn Repository',
				url: 'https://mvnrepository.com/',
			},
			{
				id: 3010,
				name: 'Mvn Repository',
				url: 'https://mvnrepository.com/',
			},
			{
				id: 3011,
				name: 'Blazor UI',
				url: 'https://www.blazor.zone/',
			},
			{
				id: 3012,
				name: 'npmjs',
				url: 'https://www.npmjs.com/',
			},
			{
				id: 3013,
				name: 'Docker',
				url: 'https://hub.docker.com/',
			},
			{
				id: 3014,
				name: 'Github',
				url: 'https://github.com/',
			},
		],
	},
	{
		categoryName: '工具',
		webSites: [
			{
				id: 4001,
				name: '谷歌扩展1',
				url: 'https://chrome.pictureknow.com/',
			},
			{
				id: 4002,
				name: '谷歌扩展2',
				url: 'https://crxdl.com/',
			},
			{
				id: 4003,
				name: '在线工具1',
				url: 'https://toolgg.com/',
			},
			{
				id: 4004,
				name: '在线工具2',
				url: 'https://tool.lu/timestamp/',
			},
			{
				id: 4005,
				name: 'JWT',
				url: 'https://jwt.ms/',
			},
		],
	},
	{
		categoryName: '其它',
		webSites: [
			{
				id: 5001,
				name: '腾讯云',
				url: 'https://cloud.tencent.com/',
			},
			{
				id: 5002,
				name: '电影',
				url: 'https://www.dy2018.com/',
			},
			{
				id: 5003,
				name: '佛山房产',
				url: 'https://fsfc.fszj.foshan.gov.cn/loupan/s/',
			},
			{
				id: 5004,
				name: '本地容器',
				url: 'http://portainer.local/',
			},
		],
	},
];
export { datas };
