import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = [ 'source' ]
  static classes = [ 'supported' ]

  connect() {
    if (document.queryCommandSupported('copy')) {
      this.element.classList.add(this.supportedClass)
    }
  }

  copy(event) {
    event.preventDefault()
    this.sourceTarget.select()
    document.execCommand('copy')
  }
}