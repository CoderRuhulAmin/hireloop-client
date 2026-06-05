import { Description, Label, Radio, RadioGroup } from "@heroui/react";

const RoleSelection = ({setRole}) => {
    return (
        <div className="flex flex-col gap-4">
            <Label>Select you Role</Label>
            <RadioGroup defaultValue="seeker" name="role" onChange={value => setRole(value)} orientation="horizontal">
                <Radio value="seeker">
                    <Radio.Control>
                        <Radio.Indicator />
                    </Radio.Control>
                    <Radio.Content>
                        <Label>Job Seeker</Label>
                        <Description>To find new job</Description>
                    </Radio.Content>
                </Radio>
                <Radio value="recruiter">
                    <Radio.Control>
                        <Radio.Indicator />
                    </Radio.Control>
                    <Radio.Content>
                        <Label>Recruiter</Label>
                        <Description>To provide job</Description>
                    </Radio.Content>
                </Radio>
            </RadioGroup>
        </div>
    );
};

export default RoleSelection;