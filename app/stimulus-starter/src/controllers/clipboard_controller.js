import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = [ 'source' ]
  static classes = [ "supported" ]

  copy(event) {
    event.preventDefault()
    this.sourceTarget.select()
    document.execCommand('copy')
  }
}