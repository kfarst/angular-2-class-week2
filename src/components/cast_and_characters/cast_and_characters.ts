import { Component, Input } from '@angular/core';

@Component({
  selector: 'cast-and-characters',
  templateUrl: 'components/cast_and_characters/cast_and_characters.html'
})
export class CastAndCharacters {
  @Input() list: Object[];
}
