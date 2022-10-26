# Investigation of Charts

## JOURNAL

### 30.9.22

- Switched vite+react to react-app and dropped typescript *snif* for now. But wierd problems solved. Using chartjs-react -plugin
- This is very in early stages. I wanted to use plain Chart -tag, but haven't got it work. Off cource I want to make this automagical as possible, but we will see.  
- Actually (don't give me up) I don't know much about react, but I learning everyday. Still miss Svelte etc.
- Adding this in github is because I need to see if and how this will work in production.
  
### 1.10.22

- Added react-router -things for practise and some icons and about page about.. well now plugins/ addons we have.
- Added Octocat-corner to straight way to read this and everything else
- Charts... started (again) after sending this. Refactored thinking and etc.

### 4.10.22

- Started to make differend Charts. Problem to solve: Data is in json, one json-block is one chart. And chart's have differend chart-bases like Bar and Line etc. I dont' want to make to every chart theirs own queryes. Maeby I have to until I have non-gummy solution.

### 6.10.22

- React-Chart.js have made my beard gray. Found way to have default values, but reality is so, that this do not suit best for purpose I making it. So. I have to try recharts, because that have more logic and propably less-complex to build. I have only so much braincells and synapses between them to use. For this project data can be complicated and change on the fly.

### 13.10.22

- Reactchart do not make chart-image by nature, so that is not good. And it's not responsive.
- Made ChartJS to fetch data from chartfile. They use theyr own datasource so pie and areachart can work
- Areachart is same than linechart with one fill=true diffrence, which I don't like, 'cos that no consistent. Well. Pie is same than Doghnut but hey are differend modules. Huraa.
- Rechart uses same datasource.
- In ChartJS data is now colors as "props" and label too id needed. Have to thing how to put numbers in pie?
- I personally might use rechart anyway in own project, 'cos I think that I can make them look better. Rechart is more suitable with lesser and bigger charts, I think. But was there gradients in chartjs?
- Al so refactored that chart types are in their own folders. I might put all so datas there, because more complex charts have own more complex datastructures and I think that it is more easyer to made them to separate json-files.

### 21.10.22

- Added more charts and new plugin datalabels. I'm focusing now only ChartJS. Noticed that datalabels put numbers for all charts in "same page". If you do not want numbers, you have to disable it from chart options. There is al so code which changes numbers in labels to percents.
- Added Manual to show in About -page.
  
### 24.10.22

- Actually so far this has not been very DRY approach, I think. I could move some options to one common file, but there is allways exceptions. It might be possible to change folder thinking, so that base charts are all in same folder exl. exceptions and so on. Or all charts which can have same options. There is al so approach that all are in same file, but that was discouraged by client.

### 26.10.22

- Implementing chart for client. Actually I can not use these, only knowledge of making these. And recgarts if needed.
  