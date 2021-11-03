import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static values = { url: String, refleshInterval: Number }

  connect() {
    this.load()

    if (this.hasRefreshIntervalValue) {
      this.startRefreshing()
    }
  }

  startRefreshing() {
    setInterval(() => {
      this.load()
    }, this.refleshIntervalValue)
  }

  load() {
    fetch(this.urlValue)
      .then(response => response.text())
      .then(html => this.element.innerHTML = html)
  }
}