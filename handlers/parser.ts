export const parser = (event) => {
    return {
        data: event.data,
        path: event.path,
        stage: event.stage,
        params: JSON.parse(event.params || "{}")
    }
}