import { ClipboardEvent, FormEvent, KeyboardEvent } from "react";

export type KeyFilterTypeExcludingRegExp =
  | "pint"
  | "int"
  | "pnum"
  | "money"
  | "num"
  | "hex"
  | "email"
  | "alpha"
  | "alphanum";

export type KeyFilterType = KeyFilterTypeExcludingRegExp | RegExp;

export type KeyFilterUtility<T> = {
  DEFAULT_MASKS: Record<KeyFilterTypeExcludingRegExp, RegExp>;
  getRegex: (keyfilter: KeyFilterType) => RegExp | KeyFilterType;
  validateKey: (
    e: KeyboardEvent<T>,
    key: string,
    keyfilter: KeyFilterType,
  ) => void;
  onBeforeInput: (
    e: FormEvent<T>,
    keyfilter: KeyFilterType,
    validateOnly: boolean,
  ) => void;
  onKeyPress: (
    e: KeyboardEvent<T>,
    keyfilter: KeyFilterType,
    validateOnly: boolean,
  ) => void;
  onPaste: (
    e: ClipboardEvent<T>,
    keyfilter: KeyFilterType,
    validateOnly: boolean,
  ) => void;
  validate: (e: FormEvent<T>, keyfilter: KeyFilterType) => boolean;
};

const KeyFilter: KeyFilterUtility<HTMLInputElement | HTMLTextAreaElement> = {
  DEFAULT_MASKS: {
    pint: /[\d]/,
    int: /[\d\-]/,
    pnum: /[\d\.]/,
    money: /[\d\.\s,]/,
    num: /[\d\-\.]/,
    hex: /[0-9a-f]/i,
    email: /[a-z0-9_\.\-@]/i,
    alpha: /[a-z_]/i,
    alphanum: /[a-z0-9_]/i,
  },

  getRegex(keyfilter) {
    if (typeof keyfilter === "string") {
      return KeyFilter.DEFAULT_MASKS[keyfilter] || keyfilter;
    }
    return keyfilter;
  },

  validateKey(e, key, keyfilter) {
    if (!key) return;

    const isPrintableKey = key.length <= 2;
    if (!isPrintableKey) return;

    const regex = this.getRegex(keyfilter);

    if (regex instanceof RegExp) {
      // Check if the regex matches the key
      if (!regex.test(key)) {
        e.preventDefault();
      }
    } else {
      // If the regex is not a RegExp, do nothing or handle appropriately
      console.warn("Invalid regex or keyfilter provided:", regex);
    }
  },

  onBeforeInput(e, keyfilter, validateOnly) {
    if (validateOnly) return;

    // Cast the event to InputEvent to access `data`
    const inputEvent = e.nativeEvent as InputEvent;

    // `data` contains the input data for the event
    const inputData = inputEvent.data;

    if (inputData) {
      this.validateKey(
        e as unknown as KeyboardEvent<HTMLInputElement>,
        inputData,
        keyfilter,
      );
    }
  },

  onKeyPress(e, keyfilter, validateOnly) {
    if (validateOnly || e.ctrlKey || e.altKey || e.metaKey) return;
    this.validateKey(e, e.key, keyfilter);
  },

  onPaste(e, keyfilter, validateOnly) {
    if (validateOnly) return;

    const regex = this.getRegex(keyfilter);

    if (regex instanceof RegExp) {
      const clipboard = e.clipboardData.getData("text");

      [...clipboard].forEach((c) => {
        if (!regex.test(c)) {
          e.preventDefault();
        }
      });
    } else {
      // Handle the case where the keyfilter does not return a RegExp
      console.warn("Invalid keyfilter or regex provided:", regex);
      e.preventDefault(); // Prevent paste since the keyfilter is invalid
    }
  },

  validate(e, keyfilter) {
    const target = e.target as HTMLInputElement; // Cast to HTMLInputElement to access `value`
    const value = target.value;

    const regex = this.getRegex(keyfilter);

    if (regex instanceof RegExp) {
      return value ? regex.test(value) : true;
    } else {
      // Handle cases where regex is not a RegExp
      console.warn("Invalid keyfilter or regex provided:", regex);
      return false; // Consider invalid if keyfilter is not valid
    }
  },
};

export { KeyFilter };
