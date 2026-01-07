const colorConfig = {
  confirmButtonColor: "var(--bs-success, #00b894)",
  cancelButtonColor: "var(--bs-danger, #d63031)",
  background: "var(--bs-body-bg, #f5f6fa)",
  success: "var(--bs-success, #00b894)",
  error: "var(--bs-danger, #d63031)",
  info: "var(--bs-primary, #0984e3)",
  warning: "var(--bs-warning, #fdcb6e)",
  default: "var(--bs-body-bg, #f5f6fa)",
};

export class Pop {
  static createDialog(content: string): HTMLDialogElement | null {
    if (typeof document === "undefined") return null;

    const dialog = document.createElement("dialog");
    dialog.innerHTML = content;
    dialog.style.background = colorConfig.background ?? "";
    dialog.classList.add("custom-dialog");
    document.body.appendChild(dialog);
    dialog.showModal();

    dialog.addEventListener("close", () => {
      dialog.remove();
    });

    return dialog;
  }

  static success(title?: string, message?: string): void {
    this.toast(title ?? "Success!", message, "check-bold", {
      color: "success",
    });
  }

  static error(error: unknown, title?: string, hint?: string): void {
    let message = "Something went wrong.";
    if (
      error &&
      typeof error === "object" &&
      "message" in error &&
      typeof (error as { message?: unknown }).message === "string"
    ) {
      message = `<div class="dialog-err-msg">${
        (error as { message: string }).message
      }</div>`;
    }
    this.toast(title ?? "Oh No!", message, "alert-decagram", {
      footer:
        hint ??
        "Refresh the page and try again. If the issue persists, please let us know.",
      color: "danger",
    });
  }

  static toast(
    title: string = "Toast is ready",
    text: string = "",
    icon: string = "information",
    options: Record<string, unknown> = {}
  ): HTMLElement | null {
    const {
      footer = "",
      color = "",
      timer = 5000,
      classesToAdd = [],
    } = options;
    if (typeof document === "undefined") return null;
    const colorClass = color ? "bg-" + color : "";
    const toast = document.createElement("div");
    toast.setAttribute("role", "alert");
    toast.classList.add(
      "custom-toast",
      "border-0",
      colorClass,
      "toast",
      "show"
    );
    if (Array.isArray(classesToAdd))
      classesToAdd.forEach((c: string) => toast.classList.add(c));
    toast.setAttribute("style", "--bs-bg-opacity: .4;");

    if (title && text) {
      toast.innerHTML = `
      <div class="toast-header ${colorClass}" ${
        colorClass ? `style="--bs-bg-opacity: .8;"` : ""
      }>
        <i class="mdi mdi-${icon} me-2"></i>
        <b>${title}</b>
        <button type="button" class="btn-close ms-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body" >
        <div>${text}</div>
        ${
          footer
            ? `<hr class="my-1"/><small class="text-body-secondary">${footer}</small>`
            : ""
        }
      </div>
    `;
    } else {
      toast.setAttribute("style", "--bs-bg-opacity: 1;");
      toast.innerHTML = `
      <div class="toast-body d-flex">
        <span>
          <i class="mdi mdi-${icon} me-2"></i><span>${title}</span>
        </span>
        <button type="button" class="btn-close ms-auto" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      `;
    }

    const toastContainer =
      document.getElementById("pop-toast-container") ??
      this.createToastContainer();
    toastContainer.appendChild(toast);

    setTimeout(
      () => {
        toast.remove();
      },
      typeof timer === "number" ? timer : 5000
    );
    return toast;
  }

  static async confirm(
    title: string = "Are you sure?",
    text: string = "",
    confirmText: string = "yes",
    cancelText: string = "no"
  ): Promise<boolean> {
    return new Promise((resolve) => {
      const dialog = this.createDialog(`
        <div class="dialog-body">
          <h2 class="text-light">${title}</h2>
          <hr/>
          <p>${text}</p>
          <div class="dialog-buttons d-flex gap-3">
            <button id="cancel-button" class="btn w-100 btn-danger" > ${cancelText} </button>
            <button id="confirm-button" class="btn btn-info w-100" > ${confirmText} </button>
          </div>
        </div>
      `);

      (
        dialog?.querySelector("#confirm-button") as HTMLButtonElement
      )?.addEventListener("click", () => {
        resolve(true);
        dialog?.close();
      });

      (
        dialog?.querySelector("#cancel-button") as HTMLButtonElement
      )?.addEventListener("click", () => {
        resolve(false);
        dialog?.close();
      });
    });
  }

  static async prompt(
    type: string = "text",
    title: string = "Please Enter a value",
    text: string = "",
    options: Record<string, unknown> = {}
  ): Promise<unknown> {
    const inputClass =
      type == "checkbox"
        ? "form-check-input"
        : type == "radio"
        ? "form-check-input"
        : type == "range"
        ? "form-range"
        : type == "color"
        ? "form-control form-control-color"
        : "form-control";

    const {
      min,
      minLength,
      max,
      maxLength,
      step,
      required = true,
      showValue = true,
      confirmText = "submit",
      cancelText = "cancel",
      parseType = true,
      placeholder,
      value,
    } = options;
    return new Promise((resolve) => {
      const dialog = this.createDialog(`
        <div class="dialog-body d-flex flex-column gap-2">
          <h2>${title}</h2>
          <hr/>
          ${text ? `<p>${text}</p>` : ""}
          <form id="pop-prompt-form">
          ${
            showValue
              ? `<label class="form-label text-center w-100 fw-bold" id="pop-prompt-value">...</label>`
              : ""
          }
            <input id="pop-prompt-input" class="${inputClass}" type="${type}" 
            ${value ? `value="${value}"` : ""} 
            ${placeholder ? `placeholder="${placeholder}"` : ""} 
            ${min ? `min="${min}"` : ""} 
            ${max ? `max="${max}"` : ""} 
            ${minLength ? `minLength="${minLength}"` : ""} 
            ${maxLength ? `maxLength="${maxLength}"` : ""} 
            ${step ? `step="${step}"` : ""} 
            ${required ? `required` : ""} />
          </form >
        <div class="dialog-buttons d-flex">
          <button type="button" id="cancel-button" class="btn w-100" > ${cancelText} </button>
          <button disabled type="submit" id="confirm-button" form="pop-prompt-form" class="btn btn-primary w-100" > ${confirmText} </button>
        </div>
        </div >
        `);
      const dialogLabel = dialog?.querySelector(
        "#pop-prompt-value"
      ) as HTMLLabelElement;
      const dialogInput = dialog?.querySelector(
        "#pop-prompt-input"
      ) as HTMLInputElement;
      const confirmButton = dialog?.querySelector(
        "#confirm-button"
      ) as HTMLButtonElement;
      dialogInput?.addEventListener("input", () => {
        if (dialogInput.checkValidity())
          confirmButton.removeAttribute("disabled");
        else confirmButton.setAttribute("disabled", "true");
        if (showValue && dialogLabel)
          dialogLabel.textContent = dialogInput.value;
      });
      dialog
        ?.querySelector("#pop-prompt-form")
        ?.addEventListener("submit", (e) => {
          e.preventDefault();
          const input = (
            document.getElementById("pop-prompt-input") as HTMLInputElement
          ).value;
          if (parseType) resolve(_tryParseInput(input, type));
          else resolve(_tryParseInput(input, type));
          dialog?.close();
        });

      (
        dialog?.querySelector("#cancel-button") as HTMLButtonElement
      )?.addEventListener("click", () => {
        resolve(null);
        dialog?.close();
      });
    });
  }

  static createToastContainer(): HTMLElement {
    const container = document.createElement("div");
    container.id = "pop-toast-container";
    document.body.appendChild(container);
    return container;
  }
}

function _tryParseInput(value: string, type: string): unknown {
  switch (type) {
    case "range":
    case "number":
      return parseFloat(value);
    case "checkbox":
      return value == "on" ? true : false;
    case "datetime-local":
    case "date":
      return new Date(value);
    default:
      return value;
  }
}
