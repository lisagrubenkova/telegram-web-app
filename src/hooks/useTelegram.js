const tg = window.Telegram.WebApp;
const user = tg.initialDataUnsafe.user;
export function useTelegram() {
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