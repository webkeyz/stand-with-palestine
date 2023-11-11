# Stand with Palestine
The "Stand with Palestine" library/widget is a sticky bottom banner that you can easily integrate into your website to show your support for Palestine. It features the Palestine flag, a statement, "WE STAND WITH PALESTINE," and dynamic statistics, which include information on martyrs, hospital attacks, destroyed homes, and more, sourced from the Palestinian Ministry of Health. 

## Usage
To add the "Stand with Palestine" banner to your website, all you have to do is adding the following script tag to the `<head>` tag or before the end of the `</body>` tag on your website:
```html
<script src="https://webkeyz.github.io/stand-with-palestine/dist/stand-with-palestine-widget.js"></script>
```
Here's what it looks like ([Live Demo](https://codepen.io/elharony/pen/LYqLGpM)):
[![Codepen Preview](https://github.com/webkeyz/stand-with-palestine/assets/16986422/dd2369a1-eeda-4e35-a624-690e990e9b61)]([URL_of_Your_CodePen_Project](https://codepen.io/elharony/pen/LYqLGpM))

## How it works?
The "Stand with Palestine" banner is created using SCSS and JavaScript. All styles are converted to CSS, and HTML elements are dynamically created using JavaScript, allowing for seamless integration without the need to modify your website's HTML structure. The library is bundled using `Webpack`, resulting in a single JavaScript file, which is available at `/dist/stand-with-palestine-widget.js`

## Dynamic Statistics
The dynamic statistics displayed in the banner are obtained from a custom-built API that retrieves the latest numbers from the `Daily Report on the Effects of the Israeli Aggression in Palestine`. As there's no existing API for this purpose, we've built and maintain our own, updating it daily with the most current numbers. This API will be open-sourced soon, allowing for transparency and community contributions.

## Design Details and Iterations
[Here's the Figma of the "Stand with Palestine" designs.](https://www.figma.com/file/hwC3K8Zi172s55xvYbPUpo/FreePalestine-Plugin?node-id=1%3A53&mode=dev) You can access this Figma to explore the updated design version, various attempts & iterations of the widget:

## Contributing
We welcome contributions to enhance and improve the "Stand with Palestine" library. If you'd like to contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure that the code is well-documented and tested.
4. Submit a pull request.

