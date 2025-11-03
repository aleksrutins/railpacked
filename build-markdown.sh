for f in ./pages/recipes/*.md; do
    out=${f%.md}.html
    cat <<EOF > $out
{% extends "layouts/recipe.html" %}
{% import "macros/recipe.html" as recipe %}
EOF
    pandoc $f -t html >> $out
done
