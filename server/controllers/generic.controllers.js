const generic = (Model) => ({

    findOne: async (req, res, next) => {
      try {
        const instance = await Model.findOne({ where: { id: req.params.uuid } });
        if (!instance) return res.status(404).json({ success: false, message: `No ${Model.name} found.` });
        res.status(200).json({ success: true, data: instance });
      } catch (error) {
        res.status(404).json({ success: false, message: error.message });
      }
      next();
    },

    findAll: async (req, res) => {
      try {
        const instances = await Model.findAll();
        if (!instances.length) return res.status(404).json({ success: false, message: `No ${Model.name} found.` });
        res.status(200).json({ success: true, data: instances });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
    },
    findByBiz: async (req, res) => {
      try {
        const instances = await Model.findAll({where: {business_id: req.params.uuid}});
        if (!instances.length) return res.status(404).json({ success: false, message: `No ${Model.name} found.` });
        res.status(200).json({ success: true, data: instances });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
    },
    findByUser: async (req, res) => {
      try {
        const instances = await Model.findAll({where: {user_id: req.params.uuid}});
        if (!instances.length) return res.status(404).json({ success: false, message: `No ${Model.name} found.` });
        res.status(200).json({ success: true, data: instances });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
    },
  
    updateOne: async (req, res) => {
      try {
        const { ...data } = req.body;
        const [updated] = await Model.update(data, { where: { id: req.params.uuid } });
        if (!updated) return res.status(404).json({ success: false, message: `No ${Model.name} found.` });
        const updatedInstance = await Model.findByPk(req.params.uuid);
        res.status(200).json({ success: true, message: `${Model.name} updated successfully.`, data: updatedInstance });
      } catch (error) {
        res.status(404).json({ success: false, message: error.message });
      }
    },
  
    deleteOne: async (req, res) => {
      try {
        const deleted = await Model.destroy({ where: { id: req.params.uuid } });
        if (!deleted) return res.status(404).json({ success: false, message: `No ${Model.name} found.` });
        res.status(200).json({ success: true, message: `${Model.name} deleted successfully.` });
      } catch (error) {
        res.status(404).json({ success: false, message: error.message });
      }
    }
  });
  
  module.exports = generic;
  