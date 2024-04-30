import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['form', 'message']

  formTargetConnected() {
    this.scrollToBottom('instant')
    this.scrollEnabled = true
  }

  messageTargetConnected() {
    if (this.scrollEnabled)
      this.scrollToBottom('smooth')
  }

  resetForm() {
    this.formTarget.reset()
  }

  scrollToBottom(behavior) {
    window.scroll({
      top: document.body.scrollHeight,
      behavior
    })
  }
}