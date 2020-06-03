class FileManager {
    constructor({ inputObj = null, renderContainer = null, inputButton = null, linksContainer = null, errorContainer = null }) {
        this.fileArray = [];
        this.inputObj = inputObj;
        this.renderContainer = renderContainer;
        this.linksContainer = linksContainer;
        this.inputButton = inputButton;
        this.errorContainer = errorContainer;
        const self = this;

        this.inputButton.click(function (event) {
            event.preventDefault();
            $(inputObj).click();
        });

        inputObj.change(function () {
            let input = self.inputObj[0];
            for (let i = 0; i < input.files.length; i++) {
                self.fileArray.push(input.files[i]);
            }
            inputObj.val('');
            self.renderFiles();
            self.isFiles();
        });

        renderContainer.on('click', 'i.file-delete', function (event) {
            self.deleteFromPage(parseInt($(event.target).attr('data-id')));
        });

        if (linksContainer != null) {
            linksContainer.on('click', 'i.file-server-delete', function (event) {
                if ($(event.target).attr('data-readonly') === 'false') {
                    self.deleteFromPage($(event.target).attr('data-id'),
                        $(event.target).attr('data-name'),
                        $(event.target).parent());
                }
            });
        }
    }

    renderFiles() {
        this.renderContainer.html('');
        for (let i = 0; i < this.fileArray.length; i++) {
            const html = FileManager.generateHTMLFiles(i, this.fileArray[i].name);
            this.renderContainer.append(html);
        }
    }

    static generateHTMLFiles(fileID, fileName) {
        return `<div class="file-block">
                  <span>${fileName}</span>
                   <i data-id="${fileID}" class="fas fa-times text-red file-delete"></i>
                </div>`
    }

    deleteFromPage(id) {
        this.fileArray.splice(id, 1);
        this.renderFiles();
    }

    static generateFileLinks(fileID, fileName, readOnly) {
        return `<div class="file-block">
                   <a  href="../files/${fileID}" target="blank">${fileName}</a>
                   <i data-id="${fileID}" data-readonly="${readOnly}" data-name="${fileName}" class="fas fa-times text-red file-server-delete"></i>
                </div>`
    }

    renderLinks(fileArray, readOnly = false) {
        this.linksContainer.html('');
        for (let i = 0; i < fileArray.length; i++) {
            const html = FileManager.generateFileLinks(filesArray[i].elektronnyy_fayl_id, fileArray[i].namefile, readOnly);
            this.linksContainer.append(html);
        }
    }

    isFiles() {
        if (this.fileArray.length !== 0 && this.errorContainer !== null) {
            this.errorContainer.addClass('d-none');
            return false;
        } else if (this.linksContainer !== null && this.linksContainer.children().length !== 0) {
            this.errorContainer.addClass('d-none');
            return false;
        }
        this.errorContainer.removeClass('d-none');
        return false;
    }

    clear() {
        if (this.renderContainer !== null) {
            this.renderContainer.html('');
        }
        if (this.linksContainer !== null) {
            this.linksContainer.html('');
        }
        if (this.errorContainer !== null) {
            this.errorContainer.addClass('d-none')
        }
        this.fileArray = []
    }
}