({
    name: "iSERVO", // Category Name
    description: "iSERVO-16 Servo motor driver boards",
    author: "INEX",
    category: "Device Control",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#3498DB", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: `
                <block type="iservo">
                    <value name="angle">
                        <shadow type="math_number">
                            <field name="NUM">5</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="iservo_calibrate">
                    <value name="min">
                        <shadow type="math_number">
                            <field name="NUM">0.5</field>
                        </shadow>
                    </value>
                    <value name="max">
                        <shadow type="math_number">
                            <field name="NUM">2.5</field>
                        </shadow>
                    </value>
                </block>
            `
        },
    ]
});
