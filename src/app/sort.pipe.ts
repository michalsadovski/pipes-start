import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(servers: any): unknown {
    if (servers?.length === 0) {
      return servers;
    }

    const serversbyName = servers.slice(0);
    serversbyName.sort(function(a,b) {
      const x = a.name;
      const y = b.name;
      return x < y ? -1 : x > y ? 1 : 0;
    });

    return serversbyName;
  }

}
