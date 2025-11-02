<extends
  template="layouts/recipe.html"
  title="Mojolicious"
  base="None"
  author="aleks"></extends>

Mojolicious is a Perl web framework. This will deploy a full Mojolicious app; for `Mojo::Lite`, replace `src/scripts/*` with your entrypoint.

```json
{
  "deploy": {
    "aptPackages": ["perl", "libmojolicious-perl"],
    "startCommand": "perl src/scripts/* daemon -m production -l 'http://*:3000'",
    "inputs": [
      {
        "local": true,
        "include": ["src"]
      }
    ]
  }
}
```
