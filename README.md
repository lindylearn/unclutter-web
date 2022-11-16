# Unclutter website

Basic public website for the Unclutter browser extension.

## Static tally html

```
wget --output-document public/feedback.html "https://tally.so/embed/npb6xB?alignLeft=1&hideTitle=1&transparentBackground=1"
sed -i '' 's/\/_next/https:\/\/tally.so\/_next/g' public/feedback.html


<script src="./iframeResizer.contentWindow.min.js"></script>
<style>main {min-height: 0 !important;}</style>

sed -i '' 's/<\/script><style>/<\/script><script src=".\/iframeResizer.contentWindow.min.js"><\/script><style>main {min-height: 0 !important;}<\/style><style>/g' public/feedback.html

sed -i '' 's/&lt;\/script&gt;&lt;style&gt;/&lt;\/script&gt;&lt;script src=&quot;.\/iframeResizer.contentWindow.min.js&quot;&gt;&lt;\/script&gt;&lt;style&gt;main {min-height: 0 !important;}&lt;\/style&gt;&lt;style&gt;/g' public/feedback.html
```
