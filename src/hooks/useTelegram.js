
export function useTelegram() {
    const tg = window.Telegram.WebApp;
const user = tg.initialDataUnsafe?.user;
    const onClose = () => {
        tg.close()
      }

    const onToggleButton = () => {
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }
    }

    return {
        onClose,
        onToggleButton,
        tg,
        user
    }
}