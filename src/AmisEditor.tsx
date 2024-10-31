import { Editor } from "amis-editor";
import { SchemaObject } from "amis/lib/Schema";
import { useState } from "react";
import { Button, Switch } from "antd";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all";
import "amis/lib/themes/default.css";
import "amis/lib/helper.css";
import "amis/sdk/iconfont.css";
import "amis-editor-core/lib/style.css";
import "amis-ui/lib/themes/cxd.css";

export function AmisEditor({save}: { save: (schema: SchemaObject) => void }) {
    const [mobile, setMobile] = useState(false);
    const [preview, setPreview] = useState(false);

    const defaultSchema: SchemaObject = {
        type: "page",
        body: "测试",
        title: "标题",
    };

    const [schema, setSchema] = useState<SchemaObject>(defaultSchema);

    const onChange = (value: SchemaObject) => {
        setSchema(value);
    };

    const onSave = () => {
        console.log("保存", schema);
        save(schema);
    };

    return (
        <div>
            <span>预览</span>
            <Switch onChange={(checked: boolean) => {
                setPreview(checked);
            }}></Switch>
            <span>移动端</span>
            <Switch onChange={(checked: boolean) => {
                setMobile(checked);
            }}></Switch>
            <Button type="primary" onClick={() => {
                onSave();
            }}>保存</Button>
            <Editor
                preview={preview}
                isMobile={mobile}
                onChange={onChange}
                value={schema}
                theme={"cxd"}
                onSave={onSave}
            />
        </div>
    );
}

export default AmisEditor;
