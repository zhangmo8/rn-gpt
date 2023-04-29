## React Native GPT APP for myself

a learning repository that use react-native for chatgpt

🌟 Inspiration comes from [milady](https://github.com/nohr/milady)

## Future

- UI design
- UX design
- Docking gpt 
- Setting key
- Support prefix
- Multi-scene prefix

## Structure

```mermaid
---
title: RNGPT
---
stateDiagram-v2

[*] --> HomePage
[*] --> SettingPage

HomePage.Person --> HomePage.AI: questions
HomePage.AI --> HomePage.Person: answer

SettingsPage.Person --> SettingsPage.Storages: set key

```

```mermaid
 classDiagram
  class SettingsPagee{
    String key
    Boolean followSystem
    Theme theme: light | dark
    String prefix
    Boolean hasContext

    onSave() save settings to local
  }

  class HomePages {
    String searchText
    String[] chatHistory

    onSubmit() commit on ChatGPT
  }
```
