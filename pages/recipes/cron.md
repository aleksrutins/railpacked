<extends
  template="layouts/recipe.html"
  title="Cron"
  base="Shell Script"
  author="aleks"></extends>

This template allows you to run cron jobs with the `Schedule::Cron` Perl package. `mcron` can also be used, but `Schedule::Cron` leads to a faster build and a smaller result image.

`railpack.json`
```json
{
  "deploy": {
    "aptPackages": ["perl", "libschedule-cron-perl", "git"]
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
echo Hello World!
```
