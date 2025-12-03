{% block base %}Shell Script{% endblock base %}
{% block author %}aleks{% endblock author %}
{% block title %}Cron{% endblock title %}

{% block content %}
{{ recipe::meta(base=\"None\", author=\"aleks\") }}

This template allows you to run cron jobs with the `Schedule::Cron` Perl package. `mcron` can also be used, but `Schedule::Cron` leads to a faster build and a smaller result image.

`railpack.json`
```json
{
  "deploy": {
    "aptPackages": ["perl", "libschedule-cron-perl"]
  }
}
```

`start.sh`
```bash
#!/usr/bin/env bash

chmod +x /app/*.bash
echo starting cron
perl run.pl
```

`crontab`
```
*/15 * * * * /app/myscript.bash
```

`run.pl`
```perl
use v5.10;
use Schedule::Cron;

sub dispatcher {
    system(@_[0]);
}

my $cron = new Schedule::Cron(\&dispatcher);
$cron->load_crontab("/app/crontab");
$cron->run(detach=>0);
```

`myscript.bash`
```bash
#!/usr/bin/env bash
echo Hello World!
```
{% endblock content %}
