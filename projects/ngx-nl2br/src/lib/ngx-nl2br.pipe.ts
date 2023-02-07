import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'nl2br',
})
export class NgxNl2brPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string, sanitize: boolean = false): string {
    if (typeof value !== 'string') {
      return value;
    }

    const result = value.replace(/(?:\r\n|\r|\n)/g, '<br />');

    return sanitize
      ? this.sanitizer.sanitize(SecurityContext.HTML, result) ?? ''
      : result;
  }
}
