import instanceAxios from "../apiServices"

export default {
    getMessages: () => {
        return instanceAxios.get('/messages');
    },
    sendMessage: (messages: string) => {
        return instanceAxios.post('/messages', {
            'message': messages
        });
    }
}
