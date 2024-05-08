import { ToastAndroid } from "react-native";
import { NativeModules } from "react-native";
const { PrinterModule } = NativeModules;

const conteudoImpressao = async () => {
  const print = [
    {
      type: "text",
      content: "texto centro grande",
      align: "center",
      size: "big",
    },
    {
      type: "text",
      content: "texto direita médio",
      align: "right",
      size: "medium",
    },
    {
      type: "text",
      content: "texto esquerda pequeno",
      align: "left",
      size: "small",
    },
    {
      type: "line",
      content: "texto sem customização",
    },
    {
      type: "image",
      imagePath:
        "iVBORw0KGgoAAAANSUhEUgAAAHcAAAAuCAAAAAA309lpAAACMklEQVRYw91YQXLDIAyUMj027Us606f6RL7lJP0Ise/bg7ERSLLdZkxnyiVGIK0AoRVh0J+0l2ZITCAmSus8tYNNv9wUl8Xn2A6XZec8tsK9lN0zEaFBCxMc0M3IoHawBAAxffLx9/frY1kkEV0/iYjC8bjjmSRuCrHjcXMoS9zD4/nqePNf10v2whrkDRjLR4t8BWPXbdyRmccDgBMZUXDiiv2DeSK4sKwWrfgIda8V/6L6blZvLMARTescAohCD7xlcsItjYXEXHn2LIESzO3mDARPYTJXwiQ/VgWFobsYGKRdRy5x6/1QuAPpKdq89MiTS1x9EBXuYJyVZd46p6ndXVwAqfwJpd4C20uLk/LsUIilQ5Q11A4tuIU8Ti4bi8oz6lNX8iD8rNUdXDm3iMs81le4pUOLOJrGatzBx1VqVRSU8qAdNRc855GwHxcFblQbYTvqx3M0ZxZnZeBq+UoayI0h3y7QPMhOyQA9JMkO9aMIqs6Rmrw73T6ey9anvDX5kbinvT2PW7yYzj8ogrcYqBOJjNxc21d5EjmH0e/iaqUV9dXj3YgYtkvCjbjaqs5O+85MxVvwTcZdhR5YuFbckCSfNkHUolTcE9Cq9iQfXtV62bo9nUBIm8AXedPidimVFIjZCdYlTw4W8RtsatKC7Bt7D4t5tMle9qPD+y4uyL81FS/UnnVu3eMzhuj3G7CqzkHF77ISsaoraSsqVnRhq3rSZ+F5Ur//b5zOOVoAwDc6szxdC+PYAAAAAABJRU5ErkJggg==",
    },
  ];

  return JSON.stringify(print);
};

const enviarImpressao = async (
  showFeedback: boolean,
  printableContent: string
) => {
  try {
    PrinterModule.startPrinter(showFeedback, printableContent);
  } catch (error) {
    console.error("Erro ao enviar a impressão:", error);
    ToastAndroid.show("Erro ao enviar a impressão", ToastAndroid.LONG);
  }
};

const realizarImpressao = async () => {
  const jsonFile = await conteudoImpressao();
  await enviarImpressao(true, jsonFile);
};

export { realizarImpressao };
