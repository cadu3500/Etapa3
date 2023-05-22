import PushNotification from "react-native-push-notification"

class NotificationManager {
      definirNavegador(novoNavegador)
      { 
          navegador = novoNavegador
      }

      criarCanal = () => {
        PushNotification.createChannel(
            {
            channelId: "channel-id",
            channelName: "My channel",
            channelDescription: "A channel to categorise your notifications",
            playSound: false,
            soundName: "default",
            vibrate: true,
            },
            (created) => console.log(`createChannel returned '${created}'`)
        );
      }

      configurar = () => {
          PushNotification.configure({
              onRegister: function (token) {
                  console.log("[NotificationManager] onRegister token:", token);
                },
              onNotification: function (notification) {
                console.log("[NotificationManager] onNotification:", notification);
                console.log("Cafe"+ notification.id)
                navegador.navigate("Cafe"+ notification.id)
              },
          })
      }

      criarNotificacao = (id, title, message, data = {}, options = {}) => {
          return {
              id: id,
              autoCancel: true,
              channelId: "channel-id",
              largeIcon: options.largeIcon || "ic_launcher",
              smallIcon: options.smallIcon || "ic_launcher",
              bigText: message || '',
              subText: title || '',
              vibrate: options.vibrate || false,
              vibration: options.vibration || 300,
              priority: options.priority || "high",
              importance: options.importance || "high",
              data: data,
              actions: ["Yes","No","..."],
              color: "Red",
          }
      }

      exibirNotificacao = (id, title, message, data = {}, options = {}) => {
          PushNotification.localNotification({
              ...this.criarNotificacao(id, title, message, data, options),
              title: title || "",
              message: message || "",
              playSound: options.playSound || false,
              soundName: options.soundName || 'default',
              userInteraction: false
          })
      }

      cancelar = () => {
          PushNotification.cancelAllLocalNotifications();
      }

      agendarNotificacao() {
        PushNotification.localNotificationSchedule({
          id:3,
          channelId: "channel-id",
          repeatTime: 5*1000,
          repeatType: 'time',
          title: "1 Notificação agendada...",
          message: "Notificação agendada",
          date: new Date(Date.now()+5*1000),
          allowWhileIdle: false,
        });
        PushNotification.localNotificationSchedule({
          id:4,
          channelId: "channel-id",
          repeatTime: 10*1000,
          repeatType: 'time',
          title: "2 Notificação agendada...",
          message: "Notificação agendada",
          date: new Date(Date.now()+5*1000),
          allowWhileIdle: true,
        });
      }
  }

  export const notificationManager = new NotificationManager();