# My Personal Website

This site is created using Jekyll 3. The reason being is that everything I use is free, and I also get free hosting on mihaicosareanu.github.io.

## How to develop the site

After you checkout the repository, you need to install the Ruby gems (dependencies). You can do that by running "bundle install". You can launch the local server using "jekyll serve", or the short version "jekyll s". The site will be available at localhost:4000.

## How to build for production

I have created a script called build.sh. The script assumes that on the side of this repo there is a folder called mihaicosareanu.github.io, which is a checkout of the production (github) repo. What the script does is that it saves some critical files (CNAME, .nojekyll, etc.) and then removes all the content, and copies the fresh build from the "site" folder, to the repo. After that you can just commit and push and wait to see the changes live.

# Site Code Architecture

Various configuration flags are available in _config.yml.

In the _data folder you could define data structures in YAML format. I have defined the menu there. You can see how it is used in the header.html available in _includes.

The _includes folder contains partials that can be included in other layouts. The responsive-image.html include is used by the jekyll-responsive-image. The layouts are available in the _layouts folder.

I created the gallery.rb plugin available under _plugins. This is exposes a "gallery" block that I can use for displaying pictures using the unitedgallery js plugin. The "unitedgallery" folder is the dist folder from the unitedgallery repo.

For theme I have used the Now UI kit available here: https://demos.creative-tim.com/now-ui-kit/index.html


# Bootstrap 4 + Jekyll

You need to run the following before trying to serve with Jekyll:
brew install imagemagick
brew unlink imagemagick
brew install imagemagick@6 && brew link imagemagick@6 --force
bundle install

To use: when you have the dependancies as per
[the docs](https://jekyllrb.com/docs/installation/) you should run
`bundle install`.
    
HTML files are based on Minima - if you need to configure
the post or page layouts, copy [those files](https://github.com/jekyll/minima/tree/master/_layouts) in as needed.
    
Bootstrap variables can be overriden in `_sass/custom.scss` - refer
to the [full list of available values](https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss).

Note that GitHub Pages doesn't run gems that aren't on their predefined list, so it won't work with their autocompile, you'll need to push up and serve the compiled files.
