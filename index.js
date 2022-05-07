const { VK, Keyboard, users_ids, Context, StickerAttachment } = require('vk-io')
const { HearManager } = require('@vk-io/hear')
const vk = new VK({
    token: '10da23322e4bded93f6cee3d4e132569358eef75e243d2f82441d4a2bfa7d69e7af96a00d2eb925498b27'
})


const bot = new HearManager()

vk.updates.on('message_new', bot.middleware)

bot.hear(/Начать/i, async (msg, next) => {
    const [user_info] = await vk.api.users.get({ user_ids: msg.senderId, fields: "sex" });
   msg.send(`👋 Привет ${user_info.first_name}, добро пожаловать!`);
   msg.send({sticker_id:50359})
   msg.send('🎁 Поздравляю, вы участник самого крупного розыгрыша 2022 года среди пользователей VK')

   vk.upload.messagePhoto({
     source:{ value:'https://sun9-83.userapi.com/s/v1/if2/wej2RTf7tc0opP8Drw97kpoMamOD6BxMcGJ7IwfRZ3m7zJ9JejsR2IdUowesR2SvbT3RvoVCSZu55eEg2LlAqHxf.jpg?size=1280x1280&quality=96&type=album'} //картинка, в моём случае из буффера
   }).then((attachment) =>
   msg.send({
     message: 'Перед вами 6     коробочек, угадайте в какой коробочке будет подарок и сможете его забрать!', //сообщение
     attachment,
     keyboard: JSON.stringify({buttons:[[{action:{type:"text", label:"1 🎁"}, color:"secondary"},{action:{type:"text", label:"2 🎁"}, color:"secondary"}],
                                       [{action:{type:"text", label:"3 🎁"}, color:"primary"},{action:{type:"text", label:"4 🎁"}, color:"primary"}],
                                      [{action:{type:"text", label:"5 🎁"}, color:"negative"},{action:{type:"text", label:"6 🎁"}, color:"negative"}]],inline: true})
   })

  

   );

})


bot.hear(/1 🎁/i, async (msg, next) => {
    const [user_info] = await vk.api.users.get({ user_ids: msg.senderId, fields: "sex" });
    vk.upload.messagePhoto({
        source:{ value:'https://sun9-22.userapi.com/s/v1/if2/ibaAYJKL9qv5c5YrdfUrSUAkJoS1FFJkcnDW61Qa321Tdw6Vfo1egg5UR6aUMtPz2_TQ9bXnK5rDrJoQ5H4zdaHQ.jpg?size=2440x2160&quality=96&type=album'} //картинка, в моём случае из буффера
      }).then((attachment) =>
      msg.send({
        message: `🎁 Поздравляем: вам выпала коробочка с деньгами 💵
        👤 Получатель: ${user_info.first_name} ${user_info.last_name}
        💰 Сумма: 1000 RUB
        🎁 Подарок: безвозмездный
        
        ⚡ Прямо сейчас ты уже можешь забрать 💵 1000₽, она уже твоя! 😌
        
        Нажми кнопку ниже и следуй инструкции ↓`, //сообщение
        attachment,
        keyboard: JSON.stringify({buttons:[[{action:{type:"text", label:"✅ Забрать 1000Р"}, color:"positive"},
]],inline: true}),
      })
  
      
  
      );

})



bot.hear(/2 🎁/i, async (msg, next) => {
    const [user_info] = await vk.api.users.get({ user_ids: msg.senderId, fields: "sex" });
    vk.upload.messagePhoto({
        source:{ value:'https://sun9-22.userapi.com/s/v1/if2/ibaAYJKL9qv5c5YrdfUrSUAkJoS1FFJkcnDW61Qa321Tdw6Vfo1egg5UR6aUMtPz2_TQ9bXnK5rDrJoQ5H4zdaHQ.jpg?size=2440x2160&quality=96&type=album'} //картинка, в моём случае из буффера
      }).then((attachment) =>
      msg.send({
        message: `🎁 Поздравляем: вам выпала коробочка с деньгами 💵
        👤 Получатель: ${user_info.first_name} ${user_info.last_name}
        💰 Сумма: 1000 RUB
        🎁 Подарок: безвозмездный
        
        ⚡ Прямо сейчас ты уже можешь забрать 💵 1000₽, она уже твоя! 😌
        
        Нажми кнопку ниже и следуй инструкции ↓`, //сообщение
        attachment,
        keyboard: JSON.stringify({buttons:[[{action:{type:"text", label:"✅ Забрать 1000Р"}, color:"positive"},
]],inline: true}),
      })
  
      
  
      );

})


bot.hear(/3 🎁/i, async (msg, next) => {
    const [user_info] = await vk.api.users.get({ user_ids: msg.senderId, fields: "sex" });
    vk.upload.messagePhoto({
        source:{ value:'https://sun9-22.userapi.com/s/v1/if2/ibaAYJKL9qv5c5YrdfUrSUAkJoS1FFJkcnDW61Qa321Tdw6Vfo1egg5UR6aUMtPz2_TQ9bXnK5rDrJoQ5H4zdaHQ.jpg?size=2440x2160&quality=96&type=album'} //картинка, в моём случае из буффера
      }).then((attachment) =>
      msg.send({
        message: `🎁 Поздравляем: вам выпала коробочка с деньгами 💵
        👤 Получатель: ${user_info.first_name} ${user_info.last_name}
        💰 Сумма: 1000 RUB
        🎁 Подарок: безвозмездный
        
        ⚡ Прямо сейчас ты уже можешь забрать 💵 1000₽, она уже твоя! 😌
        
        Нажми кнопку ниже и следуй инструкции ↓`, //сообщение
        attachment,
        keyboard: JSON.stringify({buttons:[[{action:{type:"text", label:"✅ Забрать 1000Р"}, color:"positive"},
]],inline: true}),
      })
  
      
  
      );

})


bot.hear(/4 🎁/i, async (msg, next) => {
    const [user_info] = await vk.api.users.get({ user_ids: msg.senderId, fields: "sex" });
    vk.upload.messagePhoto({
        source:{ value:'https://sun9-22.userapi.com/s/v1/if2/ibaAYJKL9qv5c5YrdfUrSUAkJoS1FFJkcnDW61Qa321Tdw6Vfo1egg5UR6aUMtPz2_TQ9bXnK5rDrJoQ5H4zdaHQ.jpg?size=2440x2160&quality=96&type=album'} //картинка, в моём случае из буффера
      }).then((attachment) =>
      msg.send({
        message: `🎁 Поздравляем: вам выпала коробочка с деньгами 💵
        👤 Получатель: ${user_info.first_name} ${user_info.last_name}
        💰 Сумма: 1000 RUB
        🎁 Подарок: безвозмездный
        
        ⚡ Прямо сейчас ты уже можешь забрать 💵 1000₽, она уже твоя! 😌
        
        Нажми кнопку ниже и следуй инструкции ↓`, //сообщение
        attachment,
        keyboard: JSON.stringify({buttons:[[{action:{type:"text", label:"✅ Забрать 1000Р"}, color:"positive"},
]],inline: true}),
      })
  
      
  
      );

})



bot.hear(/5 🎁/i, async (msg, next) => {
    const [user_info] = await vk.api.users.get({ user_ids: msg.senderId, fields: "sex" });
    vk.upload.messagePhoto({
        source:{ value:'https://sun9-22.userapi.com/s/v1/if2/ibaAYJKL9qv5c5YrdfUrSUAkJoS1FFJkcnDW61Qa321Tdw6Vfo1egg5UR6aUMtPz2_TQ9bXnK5rDrJoQ5H4zdaHQ.jpg?size=2440x2160&quality=96&type=album'} //картинка, в моём случае из буффера
      }).then((attachment) =>
      msg.send({
        message: `🎁 Поздравляем: вам выпала коробочка с деньгами 💵
        👤 Получатель: ${user_info.first_name} ${user_info.last_name}
        💰 Сумма: 1000 RUB
        🎁 Подарок: безвозмездный
        
        ⚡ Прямо сейчас ты уже можешь забрать 💵 1000₽, она уже твоя! 😌
        
        Нажми кнопку ниже и следуй инструкции ↓`, //сообщение
        attachment,
        keyboard: JSON.stringify({buttons:[[{action:{type:"text", label:"✅ Забрать 1000Р"}, color:"positive"},
]],inline: true}),
      })
  
      
  
      );

})



bot.hear(/6 🎁/i, async (msg, next) => {
    const [user_info] = await vk.api.users.get({ user_ids: msg.senderId, fields: "sex" });
    vk.upload.messagePhoto({
        source:{ value:'https://sun9-22.userapi.com/s/v1/if2/ibaAYJKL9qv5c5YrdfUrSUAkJoS1FFJkcnDW61Qa321Tdw6Vfo1egg5UR6aUMtPz2_TQ9bXnK5rDrJoQ5H4zdaHQ.jpg?size=2440x2160&quality=96&type=album'} //картинка, в моём случае из буффера
      }).then((attachment) =>
      msg.send({
        message: `🎁 Поздравляем: вам выпала коробочка с деньгами 💵
        👤 Получатель: ${user_info.first_name} ${user_info.last_name}
        💰 Сумма: 1000 RUB
        🎁 Подарок: безвозмездный
        
        ⚡ Прямо сейчас ты уже можешь забрать 💵 1000₽, она уже твоя! 😌
        
        Нажми кнопку ниже и следуй инструкции ↓`, //сообщение
        attachment,
        keyboard: JSON.stringify({buttons:[[{action:{type:"text", label:"✅ Забрать 1000Р"}, color:"positive"},
]],inline: true}),
      })
  
      
  
      );

})



bot.hear(/✅ Забрать 1000Р/i, msg => {
    msg.send(`🔥 Поздравляем! 1000Р почти твоя

    🔑 Что делать, чтобы забрать:
    
    1. Нажми забрать 1000Р и перейди на сайт
    2. Пройди быструю регистрацию(это займёт не более 1 минуты)
    3. Укажите свои реквизиты и оплатите 1₽ для активации Lite + 🎁PRO аналитика на 5 дней в подарок
    
    ➖➖➖➖➖➖➖➖
    📈 Ты сразу получишь 1000Р от партнера + инструмент для заработка в интернете
    ➖➖➖➖➖➖➖➖`);
    msg.send({
        message:`⚡ Выполнив все условия сегодня, уже в пятницу твой ожидаемый доход составит: 💵 13203₽

    Жми на кнопку ⤵`,
        keyboard:  Keyboard.builder().urlButton({ 
            label: '✅ Забрать 1000Р',
            url: 'https://vk.cc/cdlxDn'
        }).inline()})




})

console.log('Бот запущен!');
vk.updates.start().catch(console.error)
