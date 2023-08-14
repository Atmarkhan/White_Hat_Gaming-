import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  menuOptions: string[] = [];

  constructor(private service: ServiceService) {}
  ngOnInit(): void{

    this.service.getGameList().subscribe((response:any) => {
      const items: any = [];
      const ignor = ['ball', 'virtual', 'fun'];

      for(const element of response) {
        for(const category of element.categories) {
          if( ignor.indexOf(category) === -1 && !items.find((x:any) => x.title === category)) {     
            items.push( {title: category, index:  (category === 'top' ? 0 : category === 'new' ? 1 : 2)  } );
          }
        }
      }

      items.push( {
        title: 'Others',
        index: 2
      })
      const itemsSorted = items.sort((a:any, b:any) => a.index - b.index);
      for(const item of itemsSorted) {

        const title = item.title === 'top' ? 'Top Games ': item.title === 'new' ? 'New Games': item.title

        this.menuOptions.push(title);
      }
    });
  }

  capitalize(text: string) {
    return text.charAt(0).toLocaleUpperCase() + text.slice(1);
  }
}
