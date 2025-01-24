const url = 'https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50';
const content = null || document.getElementById('content')
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'b9a73436ffmsh833531eee3e8c53p174c56jsn75d5c38421ca',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
	const response = await fetch (urlApi, options);
	const data = await response.json();
	return data;
}

(async () => {
try{
	const videos = await fetchData(url);
	let view = `
	${videos.items.map(videos => {
		`  <div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${videos.snippet.thumbnails.high.url}" alt="${videos.snippet.description}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${videos.snippet.title}
            </h3>
          </div>
        </div>
		`
	}).slice(0, 5).join('')}
	`;
	content.innerHTML = view;
}catch (error){
	console.log(error);
alert( `ocurrio un problema: ${error}`)
}
})();