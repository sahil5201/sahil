import { store } from 'react-notifications-component';

export const notify = (option={}) => { store.addNotification({
    title: option.title ? option.title : "",
    message: option.message ? option.message : "Message Hear",
    type: option.type ? option.type :  "success",
    insert: option.insertPosition ? option.insertPosition : "top",
    container: option.containerPosition ? option.containerPosition : "top-right",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
      duration: option.duration ? option.duration : 3000,
      onScreen: true
    }
  });
}