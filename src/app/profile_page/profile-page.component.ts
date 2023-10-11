import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent {
  change_setting(setting_page:String){
    document.querySelector(`.${setting_page}`)?.classList.add('on');

    if(setting_page == 'general_setting'){
      document.querySelector('.general_setting')?.classList.add('on');
      document.querySelector('.change_filter > .selection')?.classList.add('general');
      document.querySelector('.change_filter > .selection')?.classList.remove('main');
    }else{
      document.querySelector('.general_setting')?.classList.remove('on');
    }

    if(setting_page == 'main_setting'){
      document.querySelector('.main_setting')?.classList.add('on');
      document.querySelector('.change_filter > .selection')?.classList.add('main');
      document.querySelector('.change_filter > .selection')?.classList.remove('general');
    }else{
      document.querySelector('.main_setting')?.classList.remove('on');
    }
  }
}
