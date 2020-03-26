import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Store } from "@ngxs/store";
import { AddProduct } from "../../store/product.actions";

@Component({
  selector: "app-create-product",
  templateUrl: "./create-product.component.html",
  styleUrls: ["./create-product.component.css"]
})
export class CreateProductComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl("", Validators.required),
    price: new FormControl("", Validators.required),
    emoji: new FormControl("", Validators.required)
  });

  emojis = EMOJIS;

  constructor(public activeModal: NgbActiveModal, private store: Store) {}

  ngOnInit() {}

  onSave() {
    const { value, valid } = this.form;
    if (valid) {
      this.store.dispatch(new AddProduct(value)).subscribe(() => {
        this.activeModal.close("Saved");
      });
    }
  }
}

const EMOJIS = [
  "🍏",
  "🍎",
  "🍐",
  "🍊",
  "🍋",
  "🍌",
  "🍉",
  "🍇",
  "🍓",
  "🍈",
  "🍒",
  "🍑",
  "🍍",
  "🍅",
  "🍆",
  "🌶",
  "🌽",
  "🍠",
  "🍯",
  "🍞",
  "🧀",
  "🍗",
  "🍖",
  "🍤",
  "🍳",
  "🍔",
  "🍟",
  "🌭",
  "🍕",
  "🍝",
  "🌮",
  "🌯",
  "🍜",
  "🍲",
  "🍥",
  "🍣",
  "🍱",
  "🍛",
  "🍙",
  "🍚",
  "🍘",
  "🍢",
  "🍡",
  "🍧",
  "🍨",
  "🍦",
  "🍰",
  "🎂"
];
