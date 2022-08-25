import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(servers: any, serverTypeSearched: string, serverTypeProperty: string): any {
    if (servers.length === 0 || serverTypeSearched === '') {
      return servers;
    }
    const serversFiltered = [];
    for (const server of servers) {
      if (server[serverTypeProperty] === serverTypeSearched) {
        serversFiltered.push(server);
      }
    }
    return serversFiltered;
  }

}
