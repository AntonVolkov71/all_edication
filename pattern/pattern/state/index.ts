class DocumentItem {
    public text: string;
    private state: DocumentItemState;

    constructor() {
        this.setState(new DraftDocumentItemState())
    }

    getState() {
        return this.state
    }

    setState(state: DocumentItemState) {
        this.state = state
        this.state.setContext(this)
    }

    published() {
        this.state.publish()
    }

    deleteDoc() {
        this.state.delete()
    }

}

abstract class DocumentItemState {
    public name: string;
    public item: DocumentItem;

    public setContext(item: DocumentItem) {
        this.item = item
    }

    public abstract publish(): void

    public abstract delete(): void
}

class DraftDocumentItemState extends DocumentItemState {
    constructor() {
        super()

        this.name = 'DraftDocument'
    }

    delete(): void {
        console.log('Документ удален')

    }

    publish(): void {
        console.log('На сайт отправлен текст', this.item.text)
        this.item.setState(new PublishDocumentItemState())
    }
}

class PublishDocumentItemState extends DocumentItemState {
    constructor() {
        super()

        this.name = 'PublishDocument'
    }

    delete(): void {
        console.log('Снято с публикации',)
        this.item.setState(new DraftDocumentItemState())

    }

    publish(): void {
        console.log('Нельзя опубликовать опубликованный документ',)
    }
}

export const startState = () => {
    console.log('start State',)

    const item = new DocumentItem()
    item.text = 'My post'

    console.log('начальное состояние',item.getState() )
    item.published()
    console.log('После публикации', item.getState() )
    item.published()

    item.deleteDoc()
    console.log('После снятия публикации',item.getState() )
}